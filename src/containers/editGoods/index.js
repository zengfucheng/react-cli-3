
import React, { Component } from 'react';
import { Form, Input, Layout, Checkbox, Button } from 'antd';
import { Table, Popconfirm} from 'antd';        // 表格
import { Upload, Icon, Modal, message } from 'antd'; // 上传图片
import propTypes from "prop-types";

const { Header, Sider, Content } = Layout;

export default
@Form.create({name: 'edit_shop'})
class editGoods extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };

        let brandOptions = [
            { label: '选项一', value: '选项一' },
            { label: '选项二', value: '选项二' },
            { label: '选项三', value: '选项三' },
        ];

        let colorOptions = [
            { label: '选项一', value: '选项一' },
            { label: '选项二', value: '选项二' },
            { label: '选项三', value: '选项三' },
        ];

        return (
            <Layout>
                <Form {...formItemLayout}>
                    <Layout>
                        <Header style={{background: 'white'}}>
                            <span>基本信息</span>
                        </Header>
                        <Content>
                            <Form.Item label='商品名称'>
                                {getFieldDecorator('gondsName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入商品名称'
                                        }
                                    ]
                                })(
                                    <Input placeholder='请输入商品名称'/>
                                )}
                            </Form.Item>
                            <Form.Item label='商品单位'>
                                {getFieldDecorator('goodsUnit', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入商品单位'
                                        }
                                    ]
                                })(
                                    <Input placeholder='单位'/>
                                )}
                            </Form.Item>
                            <Form.Item label='库存'>
                                {getFieldDecorator('goodNum',{
                                    rules: [
                                        {
                                            required: true,
                                            messag: '请输入商品库存'
                                        }
                                    ]
                                })(
                                    <Input placeholder='库存数'/>
                                )}
                            </Form.Item>
                            <Form.Item label='商家'>
                                <p>商家</p>
                            </Form.Item>
                            <Form.Item label='商品货号'>
                                <p>123456789</p>
                            </Form.Item>
                        </Content>
                    </Layout>

                    <Layout>
                        <Header style={{background: 'white'}}>
                            <span>属性设置</span>
                        </Header>
                        <Content>
                            <div style={{padding: '0 0 0 7%'}}>
                                <Form.Item>
                                    <span>品牌: </span>
                                    <Checkbox.Group options={brandOptions} defaultValue={['选项一']}/>
                                </Form.Item>
                                <Form.Item>
                                    <span>颜色: </span>
                                    <Checkbox.Group options={colorOptions} defaultValue={['选项一']}/>
                                </Form.Item>
                            </div>
                            <div style={{padding: '0 0 0 7%', width: '72%'}}>
                                <EditableTable/>
                            </div>

                        </Content>
                    </Layout>

                    <Layout>
                        <Header style={{background: 'white'}}>
                            <span>图片管理</span>
                        </Header>
                        <Content>
                            <div style={{margin: '10px 6%', padding: '10px',
                                        display: 'inline-block',
                                        border: '1px solid #ccc'}}>
                                <div  style={{display: 'inline-block'}}>
                                    <Avatar nameType='主图'/>
                                </div>
                                <div  style={{display: 'inline-block'}}>
                                    <Avatar nameType='次图'/>
                                </div>
                                <div  style={{display: 'inline-block'}}>
                                    <Avatar nameType='次图'/>
                                </div>
                                <div  style={{display: 'inline-block'}}>
                                    <Avatar nameType='次图'/>
                                </div>
                                <div  style={{display: 'inline-block'}}>
                                    <Avatar nameType='次图'/>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Form>
            </Layout>
        )
    }
}



// 表格
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);
class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingRight: 24 }}
                onClick={this.toggleEdit}
            >
                {children}
            </div>
        );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                    children
                )}
            </td>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '属性',
                dataIndex: 'attribute',
                width: '30%',
            },
            {
                title: '销售价',
                dataIndex: 'shopMoney',
                editable: true,
            },
            {
                title: '商品编号',
                dataIndex: 'goodsNum',
            },
            {
                title: '操作',
                dataIndex: '4',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a href="javascript:;">删除</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        this.state = {
            dataSource: [
                {
                    key: '0',
                    attribute: '很好',
                    shopMoney: '32',
                    goodsNum: '123456789',
                },
                {
                    key: '1',
                    attribute: '好',
                    shopMoney: '32',
                    goodsNum: '123456789',
                },
            ],
            count: 2,
        };
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            attribute: `好 ${count}`,
            shopMoney: 32,
            goodsNum: `123456789. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                </Button>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}


// 上传图片
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class Avatar extends React.Component {
    state = {
        loading: false,
    };

    static propTypes = {
        nameType: propTypes.string,
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        let { props } = this;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">{props.nameType}</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
        );
    }
}