describe('InnerComponent', () => {
    let innerComponent;
    let componentProps;

    beforeAll(() => {
      innerComponent = renderedComponent.find(InnerComponent);
      componentProps = innerComponent.props();
    });

    it('finds the other component inside the main component', () => {
      expect(innerComponent).toHaveLength(1);
    });

    it('has the main props', () => {
      expect(componentProps).toMatchObject(innerComponentProps);
    });
  });
