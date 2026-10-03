import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { TimerManagerProvider, useTimerManager } from './TimerManagerProvider';


vi.mock('@/utils/debug', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/utils/debug')>();
  return {
    ...actual,
    debugProvider: vi.fn((...args) => actual.debugProvider(...args)), 
  };
});

vi.mock('@/shared/lib', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/shared/lib')>();
  return {
    ...actual,
    secondsToMs: vi.fn((sec: number) => actual.secondsToMs(sec)),
    formatMsToTime: vi.fn((ms: number) => actual.formatMsToTime(ms)),
    genNumericId: vi.fn(() => 123),
  };
});

describe('TimerManagerProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-01').getTime());
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <TimerManagerProvider>{children}</TimerManagerProvider>
  );

  it('should add a new timer', () => {
    const { result } = renderHook(() => useTimerManager(), { wrapper });

    act(() => {
      result.current.add({
        duration: 10, // 10 seconds
        name: 'Test Timer',
        ring: null,
        status: 'idle',
      });
    });

    expect(result.current.getCountTimers()).toBe(1);
    const timerData = result.current.getTimer(123);
    expect(timerData.timerMeta.name).toBe('Test Timer');
    expect(timerData.timer.duration).toBe(10000); // 10s * 1000
  });

  it('should start and stop a timer', () => {
    const { result } = renderHook(() => useTimerManager(), { wrapper });

    act(() => {
      result.current.add({ duration: 60, name: 'T1', ring: null });
      result.current.start(123);
    });

    expect(result.current.getTimer(123).timer.isActive).toBe(true);
    expect(result.current.getTimer(123).timerMeta.status).toBe('running');

    act(() => {
      result.current.stop(123);
    });

    expect(result.current.getTimer(123).timer.isActive).toBe(false);
    expect(result.current.getTimer(123).timerMeta.status).toBe('paused');
  });

  it('should update remaining time on tick', () => {
    const { result } = renderHook(() => useTimerManager(), { wrapper });

    act(() => {
      result.current.add({ duration: 60, name: 'T1', ring: null });
      result.current.start(123);
    });

    
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const timerData = result.current.getTimer(123);
    // 60000ms - 5000ms = 55000ms
    expect(timerData.timer.remainingTime).toBe(55000);
    expect(timerData.timerMeta.time).toBe('00:55');
  });

  it('should complete timer when time reaches zero', () => {
    const { result } = renderHook(() => useTimerManager(), { wrapper });

    act(() => {
      result.current.add({ duration: 2, name: 'Short', ring: null });
      result.current.start(123);
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const timerData = result.current.getTimer(123);
    expect(timerData.timer.remainingTime).toBeLessThanOrEqual(0);
    expect(timerData.timerMeta.status).toBe('completed');
    expect(timerData.timer.isActive).toBe(false);
  });

  it('should delete a timer', () => {
    const { result } = renderHook(() => useTimerManager(), { wrapper });

    act(() => {
      result.current.add({ duration: 10, name: 'To Delete', ring: null });
    });
    
    expect(result.current.getCountTimers()).toBe(1);

    act(() => {
      result.current.delete(123);
    });


    expect(result.current.getTimer(123).timer).toBeUndefined();
  });

  it('should expose devtools to window', () => {
    renderHook(() => useTimerManager(), { wrapper });
    
    expect((window as any).__TIMER_DEVTOOLS__).toBeDefined();
    expect(typeof (window as any).__TIMER_DEVTOOLS__.start).toBe('function');
  });
});