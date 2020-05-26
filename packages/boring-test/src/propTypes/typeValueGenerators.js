const strings = [
  'Ar',
  'Trólebus',
  'Pose',
  'Descendente',
  'Caldeira',
  'Baterias',
  'Rico',
  'Beisebol',
  'Verme',
  'Anotar'
];

const bools = [true, false];

const randomId = (n) => Math.floor(Math.random() * n);

const generateString = () => strings[randomId(10)];
const generateBool = () => bools[randomId(2)];
const generateNumber = () => randomId(1000);
const generateIntlShape = () => 'tricky';
const generateInstanceOf = () => 'tricky';
const generateWidthPropType = () => '100';

export const typeToValue = {
  string: generateString(),
  bool: generateBool(),
  number: generateNumber(),
  intlShape: generateIntlShape(),
  instanceOf: generateInstanceOf(),
  WidthPropType: generateWidthPropType(),
}
