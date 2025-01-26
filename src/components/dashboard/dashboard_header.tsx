type DashboardHeaderProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DashboardHeader = ({ open, setOpen }: DashboardHeaderProps) => {
  return (
    <div className='px-5'>
      <h1>Dashboard</h1>
      <button onClick={() => setOpen(!open)}>Toggle Sidebar</button>
    </div>
  );
};

export default DashboardHeader;
