const HEIGHT = 15;
const SAND = 6;

const main = () => {
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < HEIGHT * 2; j++) {
        if (k === 0 && i === 0) {
          process.stdout.write("0")
        }
        if (k === 1 && i === HEIGHT - 1) {
          process.stdout.write("0")
        }

        if (k === 0) {
          if (i > 0) {
            if (j === i || HEIGHT * 2 - 1 === i + j) {
              process.stdout.write("0")
            } else {
              if (j > i && j < HEIGHT * 2 - i) {
                if (i <= SAND) {
                  process.stdout.write(" ")
                } else {
                  process.stdout.write("*")
                }
              } else {
                process.stdout.write(" ")
              }
            }
          }
        }

        if (k > 0) {
          if (i < HEIGHT - 1) {
            if (i + j + 1 === HEIGHT || HEIGHT + i === j) {
              process.stdout.write("0")
            } else {
              if (i + j + 1 > HEIGHT && HEIGHT + i > j) {
                if (HEIGHT - SAND <= i + 1) {
                  process.stdout.write("*")
                } else {
                  process.stdout.write(" ")
                }
              } else {
                process.stdout.write(" ")
              }
            }
          }
        }
      }
      console.log(" ")
    }
  }
}

main();