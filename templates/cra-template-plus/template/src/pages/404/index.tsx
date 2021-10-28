import { Link } from 'react-router-dom';

import { Button, Result } from 'antd';

export default function NotFountPage() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，该页面不存在"
      extra={
        <Link to="/">
          <Button type="primary">回到首页</Button>
        </Link>
      }
    />
  );
}
