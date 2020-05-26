export const generatedPropTypes = [
  {
    "prop": "name",
    "type": "string",
    "isRequired": false
  },
  {
    "prop": "isReal",
    "type": "bool",
    "isRequired": false
  },
  {
    "prop": "bedrooms",
    "type": "number",
    "isRequired": false
  },
  {
    "prop": "intl",
    "type": "intlShape",
    "isRequired": false
  },
  {
    "prop": "image",
    "type": "instanceOf",
    "isRequired": false,
    "instanceOf": "Img"
  },
  {
    "prop": "width",
    "type": "WidthPropType",
    "isRequired": true
  },
  {
    "prop": "breadcrumbInfo",
    "type": "shape",
    "isRequired": false,
    "shapeTypes": [
      {
        "prop": "city",
        "type": "string",
        "isRequired": false
      },
      {
        "prop": "displayId",
        "type": "string",
        "isRequired": false
      },
      {
        "prop": "regionName",
        "type": "string",
        "isRequired": false
      },
      {
        "prop": "state",
        "type": "string",
        "isRequired": false
      },
      {
        "prop": "street",
        "type": "string",
        "isRequired": false
      }
    ]
  },
  {
    "prop": "houseInfo",
    "type": "shape",
    "isRequired": false,
    "shapeTypes": [
      {
        "prop": "type",
        "type": "string",
        "isRequired": false
      },
      {
        "prop": "bedrooms",
        "type": "number",
        "isRequired": false
      },
      {
        "prop": "region",
        "type": "shape",
        "isRequired": false,
        "shapeTypes": [
          {
            "prop": "name",
            "type": "string",
            "isRequired": false
          }
        ]
      },
      {
        "prop": "address",
        "type": "shape",
        "isRequired": false,
        "shapeTypes": [
          {
            "prop": "city",
            "type": "string",
            "isRequired": false
          }
        ]
      },
      {
        "prop": "displayId",
        "type": "string",
        "isRequired": false
      }
    ]
  }
];
