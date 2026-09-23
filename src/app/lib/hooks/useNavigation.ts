import React, { useContext } from 'react';
import { debugProvider } from '../../../utils/debug';
import { NavigationCtx } from '../../providers/NavigationProvider';

export const useNavigation = () => {
    const ctx = useContext(NavigationCtx);
    if (!ctx) {
        debugProvider('useNavigation', 'useNavigation only use inside in NavigationProvider')
        throw new Error('useNavigation only use inside in NavigationProvider');
    }
    return ctx;
}
