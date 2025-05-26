import { Row, Typography } from 'antd';
import React from 'react';
import ClassResizeByParent from './class-based';
import SourceCode from '../../components/SourceCode';

function ResizeByParent() {
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2} className="m-0">Resize By Parent Example</Typography.Title>
      </Row>
      <SourceCode value="https://github.com/ansulagrawal/react-big-schedule/blob/master/src/examples/pages/Resize-By-Parent/index.jsx" />
      <ClassResizeByParent />
    </>
  );
}

export default ResizeByParent;
