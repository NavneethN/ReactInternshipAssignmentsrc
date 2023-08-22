import React, { useState } from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const departmentData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const Component2: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleToggle = (nodeId: string) => {
    if (expanded.includes(nodeId)) {
      setExpanded(expanded.filter(id => id !== nodeId));
    } else {
      setExpanded([...expanded, nodeId]);
    }
  };

  const renderTree = (node: any) => (
    <TreeItem
      key={node.department}
      nodeId={node.department}
      label={node.department}
      icon={
        expanded.includes(node.department) ? <ExpandMoreIcon /> : <ChevronRightIcon />
      }
      onClick={() => handleToggle(node.department)}
    >
      {Array.isArray(node.sub_departments) && (
        <div>
          {node.sub_departments.map((subDept: string) => (
            <TreeItem key={subDept} nodeId={subDept} label={subDept} />
          ))}
        </div>
      )}
    </TreeItem>
  );

  return (
    <div>
      <h2>Departments and Sub-departments</h2>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {departmentData.map((dept: any) => renderTree(dept))}
      </TreeView>
    </div>
  );
};

export default Component2;
