module.exports = function(grunt){

    grunt.initConfig({
        copy: {
            project: {
                expand: true, // Desce pelos subdiretorios
                cwd: '.', // A partir do diretorio atual (raiz)
                src: ['**', '!Gruntfile.js', '!package.json', '!bower.json'],
                // Copia todos os arquivos, exceto os marcados com !
                dest: 'dist' // O destino da copia será a pasta dist
            }
        },
        clean: {
            dist: {
                src: 'dist'
            }
        } 
    });

    grunt.registerTask('default', ['dist']);
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
};