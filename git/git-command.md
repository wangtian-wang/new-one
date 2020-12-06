
# 

# git command 
 git push --set-upstream origin devname   devname 和本地当前的分支名字必须相同， 否则会报错。

 ## 遇到冲突手动解决， 如果修改了远程仓库的代码， 再在本地要修改这个文件的代码， 需要先git pull 一下远程代码。
 ###
   
  ```遇到冲突手动解决， 选择保留那个代码， 然后重新执行 git add . 等一系列的流程```

  git reset 可以撤销本地的Git add .操作
  Git reset --hard + commit ID 撤销的是已经提交到远程仓库的commit 操作， 代码丢失
  Git reset --soft + commitID  撤销已经提交到远程仓库的commit操作，代码保留


   git rm -r --cached   https://www.jianshu.com/p/96520fb49f4c  
 
    git restore <file>..." to discard changes in working directory   抛弃文件在工作区的修改