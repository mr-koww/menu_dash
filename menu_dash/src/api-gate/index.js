const apiGate = (adapter) => {
  return {
    dashboard: {
      menuItems: {
        index: (params) => adapter.get('/dashboard/menu_items', { params }),
        disable: (id) => adapter.get(`/dashboard/menu_items/${id}/disable`),
        activate: (id) => adapter.get(`/dashboard/menu_items/${id}/activate`),
        reset: () => adapter.get('/dashboard/menu_items/reset')
      }
    },
    v1: {
      menuItems: {
        index: () => adapter.get('/v1/menu_items')
      }
    }
  }
}

export { apiGate }
