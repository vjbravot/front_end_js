import React from "react";
import { render, screen } from "@testing-library/react";
import Service from "./Service"; // Adjust the import if necessary

describe('Service component', () => {
  it('renders title and description correctly', () => {
    render(<Service title="Web Development" description="Building amazing websites" />);

    // Check if the title and description are rendered correctly
    expect(screen.getByText("Web Development")).toBeTruthy();
    expect(screen.getByText("Building amazing websites")).toBeTruthy();
  });

  it('renders image when image prop is provided', () => {
    render(
      <Service
        title="Web Development"
        description="Building amazing websites"
        image="https://example.com/image.jpg"
      />
    );

    // Check if the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByAltText("Imagen de Web Development") as HTMLImageElement;
    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toBe("https://example.com/image.jpg");
  });

  it('does not render image when image prop is not provided', () => {
    render(<Service title="Web Development" description="Building amazing websites" />);

    // Check that the image is not rendered when the image prop is missing
    const imageElement = screen.queryByRole('img');
    expect(imageElement).toBeNull();
  });
});
