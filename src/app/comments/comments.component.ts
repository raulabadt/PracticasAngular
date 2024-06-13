import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src='https://www.google.com/search?sca_esv=e912ca26f44d8cea&rlz=1C1FKPE_enES1113ES1113&sxsrf=ADLYWILKXfmqKFVR_TcDpQymFa_L3OnHsQ:1718274682442&q=this+is+fine+meme&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhdzTfxpAVBoexMFZnKJBpl_MmNp6ZDxgDPl6t2hVOzXMPRpBwkP9IY-13MTKHtUfMnQCMZ0rTN4ouWcUs_eLUI5AXuGmOIqFD0MmR9Aq7sbdW_KPBiHCxMdQgR5jBvrdr1PQDMy08G0JFg0nqUPyOawM_5jPx&sa=X&ved=2ahUKEwiH9MqAsNiGAxV8xQIHHcqAD3kQtKgLegQIExAB&biw=1278&bih=1270&dpr=1#vhid=gDfHf0LnYSBljM&vssid=mosaic.jpg'/>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim mauris a faucibus ornare. Phasellus consectetur faucibus sapien, et molestie velit convallis ac. Sed a ullamcorper augue, non porta sapien. Aliquam erat volutpat. Duis elementum viverra orci sit amet interdum. Integer cursus orci vel venenatis volutpat. Quisque placerat vestibulum feugiat. Vivamus auctor sit amet felis et ultrices. Sed vitae nulla dui. Aenean facilisis risus nisl, at venenatis ex fringilla sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vel faucibus urna. Phasellus ultrices libero sit amet felis bibendum sagittis. Pellentesque dapibus nec massa sit amet ultrices.
    </p>
  `,
  styles: `
  
  img{
    width: 100%;
    height: auto;

  }

  `
})
export class CommentsComponent {

}
