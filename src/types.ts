export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary'
}

export enum OnlineStatus {
  online = 'Online',
  offline = 'Offline'
}

export interface Model {
  name: string,
  avatar: string,
  status: OnlineStatus,
  activity: {
    latest: string,
    period: number
  }
  onEdit?: VoidFunction
}