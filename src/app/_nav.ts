export const navigation = [
  {
    name: 'Dashboard',
    url: '/Home',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  
  /*
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },*/

  {
    title: true,
    name: 'Components'
  },
  
  

  {
    name: 'Customers',
    url: '/customers',
    icon: 'icon-user',
    children: [
      {
        name: 'Customer_list',
        url: 'customers/list',
        icon: 'icon-list'
      },

      {
        name: 'Customer_create',
        url: 'customers/create',
        icon: 'icon-cursor-move'
      },
   /*   {
        name: 'Customer_view/edit',
        url: 'customers/edit/1',
        icon: 'fa fa-code'
      }*/
    ]
  },
  {
    name: 'Events',
    url: '/events',
    icon: 'fa fa-heartbeat',
    children: [
      {
        name: 'Events_list',
        url: 'events/list',
        icon: 'icon-list'
      },
      {
        name: 'Events_create',
        url: 'events/create',
        icon: 'icon-cursor-move'
      },
    ]
  },
  {
    name: 'Reservation',
    url: '/reservation',
    icon: 'fa fa-heartbeat',
    children: [
      {
        name: 'Reservation_list',
        url: 'reservation/list',
        icon: 'icon-list'
      },
      {
        name: 'Reservation_create',
        url: 'reservation/create',
        icon: 'icon-cursor-move'
      },
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  
  
];
