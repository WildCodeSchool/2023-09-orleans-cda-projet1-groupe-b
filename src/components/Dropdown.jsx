export default function DefaultDropdown() {
  return (
    <Dropdown dismissOnClick={false} label="Dropdown button">
      <Item>Dashboard</Item>
      <Item>Settings</Item>
      <Item>Earnings</Item>
      <Item>Sign out</Item>
    </Dropdown>
  );
}
