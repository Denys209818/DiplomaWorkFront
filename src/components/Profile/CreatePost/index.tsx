import 'cropperjs/dist/cropper.css';
import { Button, MenuItem, TextField } from "@mui/material";
import { Col, Row, Modal } from "antd";
import { useRef, useState } from "react";
import "../styles/createPost.css";
import { IGroupInfo } from "./types";
import SelectImage from '../Components/SelectImage/SelectImage';
import EditorTiny from '../Components/EditorTiny';


const CreatePost: React.FC = () => {  


    const handleGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroup(e.target.value);
    }
    const [groupsList, setGroups] = useState<IGroupInfo[]>([
        { title: 'Group 1' },
        { title: 'Group 2' },
        { title: 'Group 3' },
    ]);
    const [activeGroup, setGroup] = useState<string>();


   

    return (<>
        <div className="main-for-createPost">

            <Row id='createPostRow'>
                <Col lg={8} xs={24}>
                    <div className="form-createpost">
                        <h2>Створити публікацію</h2>
                        <form action="">
                            <div className="text-field">

                                <TextField
                                    name="txtTitle"
                                    id="txtTitle"
                                    label="Назва для поста"
                                    placeholder="Введіть назву"
                                    multiline
                                />
                            </div>
                            <div className="text-field">
                                <TextField
                                    name="txtTags"
                                    id="txtTags"
                                    label="Теги для пошуку"
                                    placeholder="Введіть теги без знаку #"
                                    multiline
                                />
                            </div>
                            <div className="text-field">

                                <TextField
                                    id="txtSelectGroup"
                                    select
                                    label="Обрати групу"
                                    value={activeGroup}
                                    onChange={handleGroup}
                                    helperText="Оберіть групу"
                                >
                                    {groupsList.map((option) => (
                                        <MenuItem key={option.title} value={option.title}>
                                            {option.title}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className="upload-image">
                                <SelectImage/>
                            </div>


                        </form>


                    </div>
                </Col>
                <Col lg={16} xs={24}>

                    <EditorTiny/>

                </Col>
                <Col lg={8} xs={24}>
                    <div className="submit">
                        <Button type="submit" variant="outlined">Опублікувати</Button>
                    </div>
                </Col>
            </Row>
        </div>
    </>);
}

export default CreatePost;