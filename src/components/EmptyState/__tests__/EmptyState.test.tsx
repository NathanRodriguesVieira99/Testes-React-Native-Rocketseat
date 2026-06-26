import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { EmptyState, type EmptyStateProps } from "../EmptyState";

const makeSut = async ({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) => {
  return render(
    <EmptyState
      title={title}
      description={description}
      icon={icon}
      action={action}
    />,
  );
};

describe("<EmptyState/>", () => {
  it("should render title, description and icon", async () => {
    const title = "title";
    const description = "description";
    const icon = "🚀";

    await makeSut({
      icon: <Text>{icon}</Text>,
      title,
      description,
    });

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(description)).toBeVisible();
    expect(screen.getByText(icon)).toBeVisible();
  });

  it("should render the action when provided", async () => {
    const title = "title";
    const description = "description";
    const icon = "🚀";
    const action = "action";

    await makeSut({
      title,
      description,
      icon: <Text>{icon}</Text>,
      action: <Text>{action}</Text>,
    });

    expect(screen.getByText(action)).toBeVisible();
  });

  it("should not render the action when not provided", async () => {
    const title = "title";
    const description = "description";
    const icon = "🚀";

    await makeSut({
      title,
      description,
      icon: <Text>{icon}</Text>,
    });

    const action = screen.queryByText("EmptyStateAction");

    expect(action).not.toBeVisible();
  });
});
