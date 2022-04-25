const filterOptions = () => {
  return [
    {
      label: 'Название',
      value: 'name',
      operators: [
        {
          label: '~',
          value: 'cont'
        },
        {
          label: '=',
          value: 'eq'
        }
      ],
      type: 'input'
    },
    {
      label: 'Статус',
      value: 'state',
      operators: [
        {
          label: '=',
          value: 'eq'
        }
      ],
      type: 'select',
      valueOptions: [
        {
          label: 'New',
          value: 'new'
        },
        {
          label: 'Active',
          value: 'active'
        },
        {
          label: 'Disabled',
          value: 'disabled'
        }
      ]
    }
  ]
}
export { filterOptions }
