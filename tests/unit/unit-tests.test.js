const serverFldr = "../../server";
const ArtModel = require(`${serverFldr}/lib/art-model`);
const httpMocks = require("node-mocks-http");
const MockData = require("../__mocks__/test-data.json");


//  ---> INTEGRATION TESTING?
// let req, res, next;
// beforeEach(() => {
//   req = httpMocks.createRequest();
//   res = httpMocks.createResponse();
// });

// it("getAllArt should return array of json data", () => {
  //   req.body = MockData.all;
  //   ProdCntrllr.getAllArt(req, res);
  //   expect(ProdCntrllr.getAllArt).toBeCalledWith(MockData.all);
//  ---> INTEGRATION TESTING?


describe("Product Router", () => {
  const apiRouter = require(`${serverFldr}/routes/product-router`);

  it("should be an express router", () => {
      expect(typeof apiRouter).toBe("function");
      expect(typeof apiRouter.get).not.toBe("undefined");
      expect(typeof apiRouter.get).toBe("function");
    });
});

describe("Product Controller", () => {
  const ProdCntrllr = require(`${serverFldr}/controllers/product-ctrl`);

  it("should exist as an object", () => {
    expect(typeof ProdCntrllr).not.toBe("undefined");
    expect(typeof ProdCntrllr).toBe("object");
  });

  it("should have a function: getAllArt()", () => {
    expect(typeof ProdCntrllr.getAllArt).toBe("function");
  });

  it("getAllArt() should call on ArtData Module", () => {
      const ArtData = require(`${serverFldr}/lib/art-data`);
      jest.mock(`${serverFldr}/lib/art-data`);
      ArtData.mockClear();

      async() => {
        await ProdCntrllr.getAllArt();
        expect(ArtData).toHaveBeenCalled();
      }
  });
});

describe("Art Data CommonJS Module", () => {
  const ArtData = require(`${serverFldr}/lib/art-data`);
  const artData = new ArtData();

  it("should exist as an object", () => {
    expect(typeof artData).not.toBe("undefined");
    expect(typeof artData).toBe("object");
  });

  it("should have a function getData()", () => {
    expect(typeof artData.getData).toBe("function");
  });

  it("getData should have called on Kitchen Art module", () => {
      const KitchenArt = require(`${serverFldr}/lib/kitchen-art`);
      jest.mock(`${serverFldr}/lib/kitchen-art`);
      KitchenArt.mockClear();

      // jest.setTimeout(10000);
      async() => {
        await artData.getData();
        expect(KitchenArt).toHaveBeenCalled();
      }
  });
});


describe("Kitchen Art CommonJs Module", () => {
  const KitchenArt = require(`${serverFldr}/lib/kitchen-art`);
  const kitchenArt = new KitchenArt();

  it("should exist as an object", () => {
      expect(typeof kitchenArt).not.toBe("undefined");
      expect(typeof kitchenArt).toBe("object");
    });

  it("should have a get() function", () => {
      expect(typeof kitchenArt.get).toBe("function");
    });

    it("get() should call on KitchenArt model", () => {
      const ArtModel = require(`${serverFldr}/lib/art-model`);
      jest.mock(`${serverFldr}/lib/art-model`);
      ArtModel.mockClear();

      async() => {
        await kitchenArt.get();
        expect(ArtModel).toHaveBeenCalled();
      }
    });

});





