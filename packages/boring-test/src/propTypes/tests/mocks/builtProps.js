export const builtProps = [
  {
    prop: 'name',
    type: 'string',
    isRequired: false,
    instanceOf: undefined,
    shapeTypes: undefined
  },
  {
    prop: 'isReal',
    type: 'bool',
    isRequired: false,
    instanceOf: undefined,
    shapeTypes: undefined
  },
  {
    prop: 'bedrooms',
    type: 'number',
    isRequired: false,
    instanceOf: undefined,
    shapeTypes: undefined
  },
  {
    prop: 'intl',
    type: 'intlShape',
    isRequired: false,
    instanceOf: undefined,
    shapeTypes: undefined
  },
  {
    prop: 'image',
    type: 'instanceOf',
    isRequired: false,
    instanceOf: 'Img',
    shapeTypes: undefined
  },
  {
    prop: 'width',
    type: 'WidthPropType',
    isRequired: true,
    instanceOf: undefined,
    shapeTypes: undefined
  },
  {
    prop: 'breadcrumbInfo',
    type: 'shape',
    isRequired: false,
    instanceOf: undefined,
    shapeTypes: [
      {
        prop: 'city',
        type: 'string',
        isRequired: false,
        instanceOf: undefined,
        shapeTypes: undefined
      },
      {
        prop: 'displayId',
        type: 'string',
        isRequired: false,
        instanceOf: undefined,
        shapeTypes: undefined
      },
      {
        prop: 'regionName',
        type: 'string',
        isRequired: false,
        instanceOf: undefined,
        shapeTypes: undefined
      },
      {
        prop: 'state',
        type: 'string',
        isRequired: false,
        instanceOf: undefined,
        shapeTypes: undefined
      },
      {
        prop: 'street',
        type: 'string',
        isRequired: false,
        instanceOf: undefined,
        shapeTypes: undefined
      }
    ]
  },
  {
    prop: 'houseInfo',
    type: 'shape',
    isRequired: false,
    instanceOf: undefined,
    shapeTypes: [
      {
        prop: 'type',
        type: 'string',
        isRequired: false
      },
      {
        prop: 'bedrooms',
        type: 'number',
        isRequired: false
      },
      {
        prop: 'region',
        type: 'shape',
        isRequired: false,
        shapeTypes: [
          {
            prop: 'name',
            type: 'string',
            isRequired: false
          }
        ]
      },
      {
        prop: 'address',
        type: 'shape',
        isRequired: false,
        shapeTypes: [
          {
            prop: 'city',
            type: 'string',
            isRequired: false
          }
        ]
      },
      {
        prop: 'displayId',
        type: 'string',
        isRequired: false
      }
    ]
  }
];
