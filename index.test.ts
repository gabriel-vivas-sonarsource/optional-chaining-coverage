import { A } from "./index"

it("logs provided message", () => {
   const a = new A()
   a.setValue("hello")
   a.message()
});

it("does not break with misuse. probably should btw", () => {
   const a = new A()
   // Forgot to call poorly designed API
   a.message()
});

