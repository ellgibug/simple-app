<template>
<div class="editor">
    <div class="editor__breadcrumbs">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
    </div>

    <div class="editor__controls">
        <div class="controls">
            <div class="controls__block">
                <div class="controls-block">
                    <div class="controls-block__item">
                        <div class="controls-btn" @click="execCmd('bold')">
                            <unicon name="bold"
                                    style="display: flex"
                                    fill=" #2C5364"
                                    height="26" width="26"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="editor__body">

<!--        <iframe src="" frameborder="0" name="rte" style="width: 100%; height: 500px; font-family: 'Open Sans', sans-serif;"></iframe>-->
        
        
        <div id="textarea" contenteditable="true" v-html="page.body"/>


<!--        <textarea id="myTa">{{page.body}}</textarea>-->

        <button id="bold" @click="wrapText( '<b>', '</b>')">B</button>
        <button id="code" @click="wrapText( '<pre><code>', '</pre></code>')">{}</button>
    </div>


    <button @click="updatePageBody">Save</button>

<!--    {{page}}-->
<!--    {{project}}-->
</div>


</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>