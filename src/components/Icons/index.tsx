import * as files from './files';

const Index = (props) => {
  const Icon = files.default[props.name];
  return <Icon {...props} />;
};

export default Index;