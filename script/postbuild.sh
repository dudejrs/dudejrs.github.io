page_names=("info" "projects" "portfolio" "test")

for i in ${page_names[@]}
do 
	echo ${i}
	cp build/index.html build/${i}.html
done