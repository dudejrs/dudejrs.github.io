page_names=("info" "projects" "portfolio" "test" "test/cote")

for i in ${page_names[@]}
do 
	echo ${i}
	mkdir build/test
	cp build/index.html build/${i}.html
done