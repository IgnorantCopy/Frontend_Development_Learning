// 1.导入 fs 模块
const fs = require('fs')

// 2.创建写入流对象
const ws = fs.createWriteStream('./demo.txt')

// 3.write
ws.write('public class Main {\n')
ws.write('\tpublic static void main(String[args]) {\n')
ws.write('\t\tSystem.out.println("Hello World!")\n')
ws.write('\t}\n')
ws.write('}\n')

// 4.关闭通道
ws.close()