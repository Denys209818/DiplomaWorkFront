import { useRef, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import './styles/style.css';
import tinymce from "tinymce";



interface ITinyEditor {
    editorRef: React.MutableRefObject<any>,
    initialValues?: string,
    height?: number
}

const EditorTiny: React.FC<ITinyEditor> = ({editorRef,initialValues, height}) => {

    var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (<div className="editor-content">
        <Editor
            id="tinyEditor"
            onInit={(evt, editor: any) => editorRef.current = editor}
            initialValue={initialValues ? initialValues : "<p>Опишіть публікацію...</p>"}
            init={{
                plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen link template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export',
                tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
                tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
                tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
                tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
                mobile: {
                    plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen link template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'
                },
                menu: {
                    tc: {
                        title: 'Comments',
                        items: 'addcomment showcomments deleteallconversations'
                    }
                },
                menubar: 'file edit view insert format tools table tc help',
                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                autosave_ask_before_unload: true,
                autosave_interval: '30s',
                autosave_prefix: '{path}{query}-{id}-',
                autosave_restore_when_empty: false,
                autosave_retention: '2m',
                // link_list: [
                //     { title: 'My page 1', value: 'https://www.tiny.cloud' },
                //     { title: 'My page 2', value: 'http://www.moxiecode.com' }
                // ],
                // image_list: [
                //     { title: 'My page 1', value: 'https://www.tiny.cloud' },
                //     { title: 'My page 2', value: 'http://www.moxiecode.com' }
                // ],
                // image_class_list: [
                //     { title: 'None', value: '' },
                //     { title: 'Some class', value: 'class-name' }
                // ],
                importcss_append: true,
                templates: [
                    { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
                    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
                    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
                ],
                template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                height: height ? height : 600,
                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                noneditable_noneditable_class: 'mceNonEditable',
                toolbar_mode: 'sliding',
                spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
                tinycomments_mode: 'embedded',
                content_style: '.mymention{ color: gray; }',
                contextmenu: 'link table configurepermanentpen',
                a11y_advanced_options: true,
                skin: useDarkMode ? 'oxide-dark' : 'oxide',
                content_css: useDarkMode ? 'dark' : 'default',
                /*
                The following settings require more configuration than shown here.
                For information on configuring the mentions plugin, see:
                https://www.tiny.cloud/docs/plugins/premium/mentions/.
                */

            }}
        />
    </div>);
}

export default EditorTiny;