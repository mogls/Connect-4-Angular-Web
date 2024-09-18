import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-piece',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.scss',
})
export class PieceComponent {
  constructor() {
    this.player = 0;
  }

  @Input() player: number;  
}
