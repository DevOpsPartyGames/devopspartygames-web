import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Form, Input, Button, Divider } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { name: '', email: '', result: null }
  }

  handleSubmit = async (e) => {
    const result = await addToMailchimp(this.state.email, { FNAME: this.state.name })
    if (result.result === 'error') {
      alert(`Whoops, ${this.state.name} you're already subscribed!`)
    } else {
      alert(`Thank you for subscribing ${this.state.name}!`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Divider />
        <div className="subscribe">
          <h4 className="subscribeInfo">
            Subscribe for updates on upcoming episodes!
          </h4>
          <Form name="subscribe" onFinish={this.handleSubmit} layout="inline">
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}
            >
              <Input prefix={<MailOutlined />} onChange={this.handleEmailChange} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" shape="round">
                Subscribe
              </Button>
            </Form.Item>
          </Form>

        </div>

        {/* --- STYLES --- */}
        <style jsx>{`
          .subscribe {
            .subscribeInfo {
              text-align: center;
              padding-bottom: 20px;
            }
          }
          .ant-form .ant-form-inline {
            justify-content: center;
          }
        `}</style>
      </React.Fragment>
    )
  }
}