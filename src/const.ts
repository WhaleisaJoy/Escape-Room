export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export enum AppRoute {
  Root = '/',
  DetailedQuest = '/detailed-quest/:id',
  Contacts = '/contacts',
  NotFound = '/not-found',
}

export enum NameSpace {
  Data = 'DATA',
  Interface = 'INTERFACE',
};

export const Location = {
  Latitude: 59.96825324295272,
  Longitude: 30.317370541013963,
  Zoom: 16,
};

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
};

export const DefaultQuest = {
  id: 0,
  title: '',
  description: '',
  previewImg: '',
  coverImg: '',
  type: '',
  level: '',
  peopleCount: [0, 0],
  duration: 0
};

