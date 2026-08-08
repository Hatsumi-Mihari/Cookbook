export interface RootConf {
  conf: Conf
}

export interface Conf {
  version: string;
  config_timer_default: ConfigTimerDefault
  lang: string
  menu_type: string
}

export interface ConfigTimerDefault {
  time: string
  action_state: string
  isPinTimer: boolean
  undeleteble: boolean
}