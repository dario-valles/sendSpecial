import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
let RecordRTC = require('recordrtc');

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements AfterViewInit {
  private recordRTC: any;
  private stream: MediaStream;

  recording = false;
  shouldStop = false;
  hasBeenRecorded = false;

  @ViewChild('audio') audio;

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let audio: HTMLAudioElement = this.audio.nativeElement;
    audio.muted = false;
    audio.controls = true;
    audio.autoplay = false;
  }

  toggleControls() {
    const audio: HTMLAudioElement = this.audio.nativeElement;
    audio.muted = !audio.muted;
    audio.controls = !audio.controls;
    audio.autoplay = !audio.autoplay;
  }

  successCallback(stream: MediaStream) {
    const options = {
      mimeType: 'audio/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    // let audio: HTMLAudioElement = this.audio.nativeElement;
    // video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    this.recordRTC = null;
    const audio: HTMLAudioElement = this.audio.nativeElement;
    const recordRTC = this.recordRTC;
    audio.src = audioVideoWebMURL;
    this.toggleControls();
    //recordRTC.getDataURL(function(dataURL) {});
  }

  startRecording() {
    this.recording = true;
    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    this.recording = false;
    this.hasBeenRecorded = true;
    const recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    const stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    // stream.getVideoTracks().forEach(track => track.stop());
  }

  saveRecord() {
    this.recordRTC.save('video.webm');
  }
}
