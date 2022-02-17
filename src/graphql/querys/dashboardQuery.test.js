import TestRenderer from "react-test-renderer"
import { MockedProvider } from "@apollo/client/testing"
import { GET_USERS } from "./dashboard"
import CardPageVisits from "components/Cards/CardPageVisits"

const mocks = [
    {
        request: {
            query: GET_USERS,
            variables: {
                limit: 10,
            },
        },
        result: {
            data: {
                Page: { name: "Spike", lastname: "Spiegel" },
            },
        },
    },
]

it("renders without error", () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CardPageVisits />
        </MockedProvider>
    )

    const tree = component.toJSON()
    expect(tree.children).toContain("Loading...")
})
