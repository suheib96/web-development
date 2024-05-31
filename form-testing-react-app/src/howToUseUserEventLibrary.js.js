import user from "@testing-library/user-event"
import {render,screen} from "@testing-library/react"


test("hallo ich bin ein test", async () => {

    await user.click(inputElement)
    await user.keyboard("Hallo")
})