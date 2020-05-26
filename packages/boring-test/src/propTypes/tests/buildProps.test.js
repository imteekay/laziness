import { buildProps } from '../buildProps';
import { typeToValue } from '../typeValueGenerators';
import { builtProps } from './mocks/builtProps';

const string = typeToValue.string;
const bool = typeToValue.bool;
const number = typeToValue.number;
const intlShape = typeToValue.intlShape;
const instanceOf = typeToValue.instanceOf;
const WidthPropType = typeToValue.WidthPropType;

describe('buildProps', () => {
  it('returns a props object', () => {
    expect(buildProps(builtProps)).toEqual({
      name: string,
      isReal: bool,
      bedrooms: number,
      intl: intlShape,
      image: instanceOf,
      width: WidthPropType,
      breadcrumbInfo: {
        city: string,
        displayId: string,
        regionName: string,
        state: string,
        street: string,
      },
      houseInfo: {
        type: string,
        bedrooms: number,
        region: {
          name: string,
        },
        address: {
          city: string,
        },
        displayId: string,
      }
    });
  });
});
