import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function LoginForm() {
  return (
    <>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Hãy nhập Email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Tài khoản"
          autoComplete="off"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Hãy nhập mật khẩu!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
          autoComplete="off"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Ghi nhớ mật khẩu</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Quên mật khẩu
        </a>
      </Form.Item>
    </>
  );
}
