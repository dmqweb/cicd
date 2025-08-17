import { ProForm, ProFormText, ProFormSelect } from '@ant-design/pro-components';
import {Button, Drawer, Space} from "antd"
export default function EditDrawer({ open=true, record }:any) {
  return (
    <Drawer
      title={record ? '编辑用户' : '新增用户'}
      open={open}
      width={480}
      // onClose={onClose}
      destroyOnClose          // 关闭即销毁内部状态
      footer={
        <Space style={{ float: 'right' }}>
          {/* <Button onClick={onClose}>取消</Button> */}
          <Button type="primary" htmlType="submit" form="userForm">
            保存
          </Button>
        </Space>
      }
    >
      <ProForm
        id="userForm"
        initialValues={record}
        // onFinish={onSave}
        submitter={false}     // 使用 Drawer footer 统一按钮
      >
        <ProFormText name="name" label="姓名" rules={[{ required: true }]} />
        <ProFormSelect
          name="gender"
          label="性别"
          options={[
            { label: '男', value: 'male' },
            { label: '女', value: 'female' },
          ]}
        />
      </ProForm>
    </Drawer>
  );
}