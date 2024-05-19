import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import videojs from 'video.js';
// import makeVideoPlayableInline from 'iphone-inline-video';
import iPhoneInlineVideo from 'iphone-inline-video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'video-app';
  // @ViewChild('videoPlayer', { static: true }) videoPlayer: ElementRef;
  player:any;

  ngAfterViewInit(): void {
    // const videoElement = this.videoPlayer.nativeElement;

    // Ensure inline playback on iPhone
    // makeVideoPlayableInline(videoElement, { iPad: true });

    // Initialize Video.js player
    this.player = videojs('player', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      techOrder: ['html5'],
      sources: [{
        src: 'https://explorercdn.cdnparenting.com/fcvexplorer/Look-10-583_720-1.mp4/manifest.m3u8',
        type: 'application/x-mpegURL'
      }]
    });

    // Add error handling for HLS
    this.player.on('error', () => {
      console.error('Video.js error:', this.player.error());
    });

    const videoElement = document.querySelector('#player');
    if (videoElement) {
      iPhoneInlineVideo(videoElement);
      console.log(iPhoneInlineVideo);
    }
  }

  ngOnDestroy(): void {
    // if (this.player) {
    //   this.player.dispose();
    // }
  }
}
