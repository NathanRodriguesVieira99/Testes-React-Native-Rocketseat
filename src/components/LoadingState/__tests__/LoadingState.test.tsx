import { render, screen } from "@testing-library/react-native";
import { LoadingState, type LoadingStateProps } from "../LoadingState";

const makeSut = ({ message }: LoadingStateProps) => {
  return render(<LoadingState message={message} />);
};

describe("<LoadingState/>", () => {
  it("should render the default message", async () => {
    await makeSut({ message: "loading..." });

    expect(screen.getByText("loading...")).toBeVisible();
  });

  it("should render the custo message", async () => {
    await makeSut({ message: "test_loading..." });

    expect(screen.getByText("test_loading...")).toBeVisible();
  });
});
