export const setupGoogleMapsMock = () => {
  const mockMap = jest.fn().mockImplementation(() => ({
    setCenter: jest.fn(),
    setZoom: jest.fn(),
    panTo: jest.fn(),
    addListener: jest.fn(),
  }));

  const mockMarker = jest.fn().mockImplementation(() => ({
    setMap: jest.fn(),
    addListener: jest.fn(),
    getTitle: jest.fn(),
    setIcon: jest.fn(),
    getPosition: jest.fn(),
  }));

  global.window.google = {
    maps: {
      Map: mockMap,
      Marker: mockMarker,
      SymbolPath: {
        CIRCLE: 0,
      },
      Animation: {
        DROP: 1,
      },
    },
  };
};
