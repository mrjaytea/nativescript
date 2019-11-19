import { Component, OnInit } from "@angular/core";
import { TNSPlayer } from 'nativescript-audio';
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-metronome",
    styleUrls: ["./metronome.component.css"],
    templateUrl: "./metronome.component.html"
})
export class MetronomeComponent implements OnInit {
    private _player: TNSPlayer;
    beatValue: number = 4;
    bpmValue: number = 90;
    isPlaying: boolean = false;
    playInterval: any;

    constructor(private fonticon: TNSFontIconModule, private routerExtensions: RouterExtensions) {
        this._player = new TNSPlayer();
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
        this._player
        .initFromFile({
            audioFile: '~/audio/beep.mp3', // ~ = app directory
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        })
        .then(() => {
            this._player.getAudioTrackDuration().then(duration => {
            // iOS: duration is in seconds
            // Android: duration is in milliseconds
            console.log(`song duration:`, duration);
            });
        });
    }
    
    private _trackComplete(args: any) {
    console.log('reference back to player:', args.player);
    // iOS only: flag indicating if completed succesfully
    console.log('whether song play completed successfully:', args.flag);
    }
    
    private _trackError(args: any) {
    console.log('reference back to player:', args.player);
    console.log('the error:', args.error);
    // Android only: extra detail on error
    console.log('extra info on the error:', args.extra);
    }


    minusBeats() {
        if(this.beatValue > 1){
            this.beatValue /= 2;
        }
    }

    plusBeats() {
        if(this.beatValue < 32)
            this.beatValue *=2;
    }

    sliderValueChange(args: number) {
        this.bpmValue = Math.round(args);
    }

    pauseMetronome() {
        if (this._player.isAudioPlaying()) {
            clearInterval(this.playInterval);
            this._player.pause();
            this.isPlaying = false;
        }
        clearInterval(this.playInterval);
        this._player.pause();
        this.isPlaying = false;
    }

    startMetronome() {
        this.isPlaying = true;
        if(!this._player.isAudioPlaying() && this.isPlaying){
            this.playInterval = setInterval(()=>{
                this._player.play();
            }, (60000/this.bpmValue)/this.beatValue*4)
        }
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        clearInterval(this.playInterval);
    }

    goBack() {
        // Used for going back to the previous page
        this.routerExtensions.back();
    }
}
