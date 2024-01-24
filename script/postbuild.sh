page_names=("info" "projects" "portfolio" "test" "test/cote" "test/programming" "practice" "practice/0" "practice/1" "practice/2" "practice/3")

mkdir build/test 
mkdir build/practice
for i in ${page_names[@]}
do 
	echo ${i}
	cp build/index.html build/${i}.html
done