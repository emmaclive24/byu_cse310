# Overview of snake game in c#


This project is a classic Snake Game implemented as a C# console application. My goal as a software engineering student was to apply core programming concepts in a real-time, interactive environment to deepen my understanding of how C# handles control flow, collections, user input, and graphics within the limitations of the terminal window.

The game operates by continuously updating a 2D grid where the player controls a snake that moves in a chosen direction, consumes randomly placed apples, and grows in length with each apple. The game resets when the snake collides with the wall or itself. This simulates game loop logic, user input polling, dynamic data updates, and primitive rendering techniques.

This project provided me with hands-on experience in managing the game state, real-time keyboard input with `Console.KeyAvailable`, efficient use of data structures like `List<T>`, and implementing basic game physics in a non-graphical environment. It also served as a platform for refining my understanding of enums, switch-case logic, object instantiation, and random number generation in C#.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

- IDE: Visual Studio community 2022 
- Language:C# 10 (.NET 6.0)
- Framework: .NET Console Application
- Operating System: Windows 11
- Version Control: Git (local commits)

# Key Features

- Real-time snake movement with arrow key input
- Apple spawning with `System.Random`
- Tail growth and body tracking via `List<Coord>`
- Game over conditions and reset handling
- Frame delay implementation using `DateTime`
- Edge-bound collision and self-collision detection
- Basic character rendering using ASCII characters

# Program Architecture

- `Direction.cs`: Contains an `enum Direction` defining Up, Down, Left, and Right directions to simplify movement logic.
- `Coord.cs` *(assumed)*: Represents a coordinate pair (`X`, `Y`) for snake and apple positions.
- `Program.cs`: Contains the main game loop, rendering logic, collision checks, score tracking, and input processing.

# Lessons Learned

- How to structure a main game loop that efficiently handles updates and rendering in real time.
- How to track an object's history over time (snake tail) and manipulate dynamic lists.
- Real-time user input handling using `Console.ReadKey()` and `Console.KeyAvailable`.
- Avoiding reverse-direction movement to prevent logical self-collisions.
- Debugging logic errors in collision detection and growth mechanics.

# Useful Websites

- [Microsoft C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [Stack Overflow](https://stackoverflow.com/)
- [Dot Net Perls](https://www.dotnetperls.com/)
- [GeeksforGeeks - Snake Game in C#](https://www.geeksforgeeks.org/snake-game-in-c-sharp/)
- [TutorialsPoint - C# Console Input](https://www.tutorialspoint.com/csharp/csharp_basic_syntax.htm)

# Future Work

- ✅ Refactor to use object-oriented design**:
  - Create `Snake`, `Apple`, and `Game` classes to separate concerns.
- ✅ Add Pause/Resume Functionality**:
  - Use key bindings to allow pausing and resuming during gameplay.
- ✅ Support saving high scores**:
  - Write to a file and load the highest score at startup.
- ✅ Improve UI and game feedback**:
  - Add colors using ANSI escape codes or third-party libraries.
  - Provide game over screen and score summary.
- ✅ Add level progression or increasing difficulty**:
  - Introduce obstacles and speed increases after every few apples.

# Contact

If you'd like to collaborate, provide feedback, or explore the source code in more depth, feel free to reach out via [LinkedIn](nkedin.com/in/clive-tumbare-59119b292/) or check out my GitHub repository (link:https://github.com/emmaclive24/byu_cse310/tree/main/snake).
UML DIAGRAM
+----------------+
|     Coord      |
+----------------+
| - X: int       |
| - Y: int       |
+----------------+
| +Equals(obj): bool |
+----------------+

+----------------+
|   Apple        |
+----------------+
| - Position: Coord |
+----------------+
| +Respawn(gridWidth: int, gridHeight: int): void |
+----------------+

+----------------+
|   Snake        |
+----------------+
| - Head: Coord          |
| - Body: List<Coord>    |
| - Direction: Direction |
| - TailLength: int      |
+----------------+
| +Move(): void          |
| +Grow(): void          |
| +CheckCollision(): bool|
| +SetDirection(d: Direction): void |
+----------------+

+----------------+
|    Game        |
+----------------+
| - GridSize: Coord     |
| - Snake: Snake        |
| - Apple: Apple        |
| - Score: int          |
| - FrameDelay: int     |
+----------------+
| +Start(): void        |
| - Update(): void      |
| - Render(): void      |
| - HandleInput(): void |
| - CheckGameOver(): bool |
+----------------+

+----------------+
|  Direction (enum) |
+----------------+
| Up              |
| Down            |
| Left            |
| Right           |
+----------------+







<img width="1309" height="880" alt="snake_game_uml" src="https://github.com/user-attachments/assets/31b9e0fc-c95b-4134-be44-a5fe871a952c" />



  
