page_names=("info" "projects" "portfolio" "test" "test/cote" "test/programming" "practice" "pracitce/0" "practice/1" "practice/2" "pracitce/3")

for i in ${page_names[@]}
do 
	echo ${i}
	mkdir build/test
	cp build/index.html build/${i}.html
done