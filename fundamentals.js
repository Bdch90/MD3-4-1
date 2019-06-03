// function main() {
//   console.log("START");
//   if (true) {
//     var lang = "vi";
//     var target = "en-us";
//     console.log("inside block");
//     console.log(target);
//   }
//   console.log(lang);
//   console.log(target);
// }
// function main() {
//     var x = 5;
//     console.log(x);
//     var x = 10;
//     console.log(x);
//
//     let y = 55;
//     console.log(y);
//     y = 100;
//     console.log(y);
// }
// function main() {
//   console.log(x);
//   var x = 5;
//
//     let y = 10;
//     console.log(y);
// }
/**
 * Data types
 */
//
// function main() {
//   let message: string;
//   let total: number = 100;
//   let isProduction = true;
//   let prices: Array<number> = [120, 88, 60];
//   let languages: string[] = ['vi', 'en-us'];
//   let now = new Date();
//   let unknown: any;
//
//   enum Direction {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
//   };
//
//   function log(msg: string): void {
//     console.log(msg)
//   }
//
//   interface IPost {
//     id: string;
//     title: string;
//     body?: string;
//   }
//
//   isProduction = false;
//   unknown = Direction.UP;
//   unknown = 'changed';
//
//   const post: IPost = {
//         id:"1",
//       title:"new",
//   };
//    message = "50";
//
//   function getPost(postId: string): IPost {
//     // do something to retrieve post
//     return {
//       id: postId,
//       title: 'Post Title',
//       body: 'Post Body',
//       extra: 'data'
//     } as IPost;
//   }
// }
// function main() {
//     let count = 50;
//     if (count > 0) {
//         count--;
//     } else {
//         count = 0;
//     }
//     console.log(count);
//
// }
function main() {
    console.log("for loop");
    var idx;
    var keys = "abcdef";
    for (var idx_1 = 0; idx_1 < keys.length; ++idx_1) {
        console.log(keys[idx_1]);
    }
    console.log("while loop");
    idx = 0;
    while (idx < keys.length) {
        console.log(keys[idx]);
        ++idx;
    }
    console.log("do-while loop");
    idx = 0;
    do {
        console.log(keys[idx]);
        ++idx;
    } while (idx < keys.length);
    console.log("for-of loop");
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var item = keys_1[_i];
        console.log(item);
    }
    console.log("for-in loop");
    var user = {
        name: 'Bob',
        age: 55
    };
    for (var key in user) {
        console.log(key + ": " + user[key]);
    }
}
main();
