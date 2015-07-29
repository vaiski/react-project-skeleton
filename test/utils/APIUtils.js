
import { expect } from "chai";
import { API_ROOT } from "../../app/constants/AppConstants";
import { buildURL, toQueryString } from "../../app/utils/APIUtils";

describe("APIUtils", function () {
    describe("#buildURL()", function () {
        it("should append the enpoint path to the root path", function () {
            expect(buildURL("/posts")).to.be.equal(API_ROOT + "/posts");
        });
    });

    describe("#toQueryString()", function () {
        it("should serialize a trivial object to a query string", function () {
            var obj = {
                name: "Eddie",
                age: 25
            };

            var expectedStr = "name=Eddie&age=25";

            expect(toQueryString(obj)).to.be.equal(expectedStr);
        });

        it("should omit functions", function () {
            var obj = {
                name: "Eddie",
                bark: function () {
                    console.log("Woof!");
                }
            };

            var expectedStr = "name=Eddie";

            expect(toQueryString(obj)).to.be.equal(expectedStr);
        });
    })
});
