import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import routes from "../routes";

// Define your mock data
const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [`/directors`],
  initialIndex: 0
});

// Test for rendering the NavBar component
test("renders the <NavBar /> component", async () => {
  render(<RouterProvider router={router} />);

  // Wait for the navigation element to be in the document
  await waitFor(() => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  // Check for the presence of genres in the navigation bar
  const genres = ["Action", "Adventure", "Fantasy"];
  for (const genre of genres) {
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});
