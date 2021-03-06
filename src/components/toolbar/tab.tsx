import * as React from 'react';

// import Button from './button';
import Button from '../../containers/toolbar/button';

interface IToolbarProps {
  seleted: string;
}

const ToolbarTab = (props: IToolbarProps) => {
  return (
    <div className="cu-dashboard-board__header-filter-sort">
      <Button title="Write" key="Write" />
      <Button title="Preview" key="Preview" />
    </div>
  );
};

export default ToolbarTab;
