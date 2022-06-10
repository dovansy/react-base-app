function Layout(props: any) {
  return (
    <div>
      <div>Header</div>
      <div className="absolute top-[79px] right-0 bottom-0 left-0">
        <div>SideBar</div>
        <div className="flex-1 overflow-auto">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
