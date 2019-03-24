namespace Processador_De_Imagens
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            System.Windows.Forms.DataVisualization.Charting.ChartArea chartArea1 = new System.Windows.Forms.DataVisualization.Charting.ChartArea();
            System.Windows.Forms.DataVisualization.Charting.Series series1 = new System.Windows.Forms.DataVisualization.Charting.Series();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.panel1 = new System.Windows.Forms.Panel();
            this.button2 = new System.Windows.Forms.Button();
            this.btnMudarIntensidade = new System.Windows.Forms.Button();
            this.btnNegativo = new System.Windows.Forms.Button();
            this.btnBinalizacao = new System.Windows.Forms.Button();
            this.btnHistograma = new System.Windows.Forms.Button();
            this.btnInvVert = new System.Windows.Forms.Button();
            this.btnInvHoriz = new System.Windows.Forms.Button();
            this.btnEscalaDeCinza = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.label4 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.labelImgOriginal = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.progressBar1 = new System.Windows.Forms.ProgressBar();
            this.chart1 = new System.Windows.Forms.DataVisualization.Charting.Chart();
            this.labelHist = new System.Windows.Forms.Label();
            this.trbMudarIntens = new System.Windows.Forms.TrackBar();
            this.labelTrb = new System.Windows.Forms.Label();
            this.ckBxMudarInt = new System.Windows.Forms.CheckBox();
            this.btnFMedia = new System.Windows.Forms.Button();
            this.panel1.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.chart1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.trbMudarIntens)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(77)))), ((int)(((byte)(27)))), ((int)(((byte)(123)))));
            this.panel1.Controls.Add(this.btnFMedia);
            this.panel1.Controls.Add(this.button2);
            this.panel1.Controls.Add(this.btnMudarIntensidade);
            this.panel1.Controls.Add(this.btnNegativo);
            this.panel1.Controls.Add(this.btnBinalizacao);
            this.panel1.Controls.Add(this.btnHistograma);
            this.panel1.Controls.Add(this.btnInvVert);
            this.panel1.Controls.Add(this.btnInvHoriz);
            this.panel1.Controls.Add(this.btnEscalaDeCinza);
            this.panel1.Controls.Add(this.button1);
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(360, 817);
            this.panel1.TabIndex = 0;
            // 
            // button2
            // 
            this.button2.FlatAppearance.BorderSize = 0;
            this.button2.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button2.Font = new System.Drawing.Font("Century Gothic", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.ForeColor = System.Drawing.SystemColors.Control;
            this.button2.Image = ((System.Drawing.Image)(resources.GetObject("button2.Image")));
            this.button2.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.button2.Location = new System.Drawing.Point(9, 764);
            this.button2.Margin = new System.Windows.Forms.Padding(0);
            this.button2.Name = "button2";
            this.button2.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.button2.Size = new System.Drawing.Size(133, 44);
            this.button2.TabIndex = 9;
            this.button2.Text = "   Info";
            this.button2.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // btnMudarIntensidade
            // 
            this.btnMudarIntensidade.FlatAppearance.BorderSize = 0;
            this.btnMudarIntensidade.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnMudarIntensidade.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnMudarIntensidade.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnMudarIntensidade.ForeColor = System.Drawing.SystemColors.Control;
            this.btnMudarIntensidade.Image = ((System.Drawing.Image)(resources.GetObject("btnMudarIntensidade.Image")));
            this.btnMudarIntensidade.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnMudarIntensidade.Location = new System.Drawing.Point(-1, 479);
            this.btnMudarIntensidade.Margin = new System.Windows.Forms.Padding(0);
            this.btnMudarIntensidade.Name = "btnMudarIntensidade";
            this.btnMudarIntensidade.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnMudarIntensidade.Size = new System.Drawing.Size(360, 60);
            this.btnMudarIntensidade.TabIndex = 8;
            this.btnMudarIntensidade.Text = "   Mudar intensidade";
            this.btnMudarIntensidade.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnMudarIntensidade.UseVisualStyleBackColor = true;
            this.btnMudarIntensidade.Click += new System.EventHandler(this.btnMudarIntensidade_Click);
            // 
            // btnNegativo
            // 
            this.btnNegativo.FlatAppearance.BorderSize = 0;
            this.btnNegativo.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnNegativo.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnNegativo.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnNegativo.ForeColor = System.Drawing.SystemColors.Control;
            this.btnNegativo.Image = ((System.Drawing.Image)(resources.GetObject("btnNegativo.Image")));
            this.btnNegativo.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnNegativo.Location = new System.Drawing.Point(0, 419);
            this.btnNegativo.Margin = new System.Windows.Forms.Padding(0);
            this.btnNegativo.Name = "btnNegativo";
            this.btnNegativo.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnNegativo.Size = new System.Drawing.Size(360, 60);
            this.btnNegativo.TabIndex = 7;
            this.btnNegativo.Text = "   Negativo de imagem";
            this.btnNegativo.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnNegativo.UseVisualStyleBackColor = true;
            this.btnNegativo.Click += new System.EventHandler(this.btnNegativo_Click);
            // 
            // btnBinalizacao
            // 
            this.btnBinalizacao.FlatAppearance.BorderSize = 0;
            this.btnBinalizacao.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnBinalizacao.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnBinalizacao.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnBinalizacao.ForeColor = System.Drawing.SystemColors.Control;
            this.btnBinalizacao.Image = ((System.Drawing.Image)(resources.GetObject("btnBinalizacao.Image")));
            this.btnBinalizacao.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnBinalizacao.Location = new System.Drawing.Point(-1, 359);
            this.btnBinalizacao.Margin = new System.Windows.Forms.Padding(0);
            this.btnBinalizacao.Name = "btnBinalizacao";
            this.btnBinalizacao.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnBinalizacao.Size = new System.Drawing.Size(360, 60);
            this.btnBinalizacao.TabIndex = 6;
            this.btnBinalizacao.Text = "   Binalização";
            this.btnBinalizacao.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnBinalizacao.UseVisualStyleBackColor = true;
            this.btnBinalizacao.Click += new System.EventHandler(this.btnBinalizacao_Click);
            // 
            // btnHistograma
            // 
            this.btnHistograma.FlatAppearance.BorderSize = 0;
            this.btnHistograma.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnHistograma.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnHistograma.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnHistograma.ForeColor = System.Drawing.SystemColors.Control;
            this.btnHistograma.Image = ((System.Drawing.Image)(resources.GetObject("btnHistograma.Image")));
            this.btnHistograma.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnHistograma.Location = new System.Drawing.Point(0, 299);
            this.btnHistograma.Margin = new System.Windows.Forms.Padding(0);
            this.btnHistograma.Name = "btnHistograma";
            this.btnHistograma.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnHistograma.Size = new System.Drawing.Size(360, 60);
            this.btnHistograma.TabIndex = 5;
            this.btnHistograma.Text = "   Gerar Histograma";
            this.btnHistograma.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnHistograma.UseVisualStyleBackColor = true;
            this.btnHistograma.Click += new System.EventHandler(this.btnHistograma_Click);
            // 
            // btnInvVert
            // 
            this.btnInvVert.FlatAppearance.BorderSize = 0;
            this.btnInvVert.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnInvVert.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnInvVert.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnInvVert.ForeColor = System.Drawing.SystemColors.Control;
            this.btnInvVert.Image = ((System.Drawing.Image)(resources.GetObject("btnInvVert.Image")));
            this.btnInvVert.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnInvVert.Location = new System.Drawing.Point(0, 239);
            this.btnInvVert.Margin = new System.Windows.Forms.Padding(0);
            this.btnInvVert.Name = "btnInvVert";
            this.btnInvVert.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnInvVert.Size = new System.Drawing.Size(360, 60);
            this.btnInvVert.TabIndex = 4;
            this.btnInvVert.Text = "   Inverter Verticalmente";
            this.btnInvVert.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnInvVert.UseVisualStyleBackColor = true;
            this.btnInvVert.Click += new System.EventHandler(this.btnInvVert_Click);
            // 
            // btnInvHoriz
            // 
            this.btnInvHoriz.FlatAppearance.BorderSize = 0;
            this.btnInvHoriz.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnInvHoriz.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnInvHoriz.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnInvHoriz.ForeColor = System.Drawing.SystemColors.Control;
            this.btnInvHoriz.Image = ((System.Drawing.Image)(resources.GetObject("btnInvHoriz.Image")));
            this.btnInvHoriz.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnInvHoriz.Location = new System.Drawing.Point(0, 179);
            this.btnInvHoriz.Margin = new System.Windows.Forms.Padding(0);
            this.btnInvHoriz.Name = "btnInvHoriz";
            this.btnInvHoriz.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnInvHoriz.Size = new System.Drawing.Size(360, 60);
            this.btnInvHoriz.TabIndex = 3;
            this.btnInvHoriz.Text = "   Inverter Horizontalmente";
            this.btnInvHoriz.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnInvHoriz.UseVisualStyleBackColor = true;
            this.btnInvHoriz.Click += new System.EventHandler(this.btnInvHoriz_Click);
            // 
            // btnEscalaDeCinza
            // 
            this.btnEscalaDeCinza.FlatAppearance.BorderSize = 0;
            this.btnEscalaDeCinza.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnEscalaDeCinza.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnEscalaDeCinza.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnEscalaDeCinza.ForeColor = System.Drawing.SystemColors.Control;
            this.btnEscalaDeCinza.Image = ((System.Drawing.Image)(resources.GetObject("btnEscalaDeCinza.Image")));
            this.btnEscalaDeCinza.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnEscalaDeCinza.Location = new System.Drawing.Point(0, 119);
            this.btnEscalaDeCinza.Margin = new System.Windows.Forms.Padding(0);
            this.btnEscalaDeCinza.Name = "btnEscalaDeCinza";
            this.btnEscalaDeCinza.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnEscalaDeCinza.Size = new System.Drawing.Size(360, 60);
            this.btnEscalaDeCinza.TabIndex = 2;
            this.btnEscalaDeCinza.Text = "   Escala de cinza";
            this.btnEscalaDeCinza.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnEscalaDeCinza.UseVisualStyleBackColor = true;
            this.btnEscalaDeCinza.Click += new System.EventHandler(this.btnEscalaDeCinza_Click);
            // 
            // button1
            // 
            this.button1.FlatAppearance.BorderSize = 0;
            this.button1.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.ForeColor = System.Drawing.SystemColors.Control;
            this.button1.Image = ((System.Drawing.Image)(resources.GetObject("button1.Image")));
            this.button1.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.button1.Location = new System.Drawing.Point(0, 3);
            this.button1.Margin = new System.Windows.Forms.Padding(0);
            this.button1.Name = "button1";
            this.button1.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.button1.Size = new System.Drawing.Size(360, 60);
            this.button1.TabIndex = 1;
            this.button1.Text = "   Abrir imagem";
            this.button1.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.Transparent;
            this.panel2.Controls.Add(this.label4);
            this.panel2.Location = new System.Drawing.Point(0, 66);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(350, 50);
            this.panel2.TabIndex = 1;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.ForeColor = System.Drawing.Color.Snow;
            this.label4.Location = new System.Drawing.Point(12, 16);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(70, 25);
            this.label4.TabIndex = 7;
            this.label4.Text = "Filtros:";
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.Silver;
            this.pictureBox1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pictureBox1.Location = new System.Drawing.Point(360, 43);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(560, 360);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 1;
            this.pictureBox1.TabStop = false;
            // 
            // pictureBox2
            // 
            this.pictureBox2.BackColor = System.Drawing.Color.Silver;
            this.pictureBox2.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pictureBox2.Location = new System.Drawing.Point(920, 43);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(560, 360);
            this.pictureBox2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox2.TabIndex = 2;
            this.pictureBox2.TabStop = false;
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            // 
            // labelImgOriginal
            // 
            this.labelImgOriginal.AutoSize = true;
            this.labelImgOriginal.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelImgOriginal.Location = new System.Drawing.Point(363, 9);
            this.labelImgOriginal.Name = "labelImgOriginal";
            this.labelImgOriginal.Size = new System.Drawing.Size(155, 25);
            this.labelImgOriginal.TabIndex = 3;
            this.labelImgOriginal.Text = "Imagem original:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(915, 9);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(195, 25);
            this.label2.TabIndex = 4;
            this.label2.Text = "Imagem processada:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(366, 794);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(91, 20);
            this.label3.TabIndex = 5;
            this.label3.Text = "Progresso:";
            // 
            // progressBar1
            // 
            this.progressBar1.Location = new System.Drawing.Point(463, 794);
            this.progressBar1.Name = "progressBar1";
            this.progressBar1.Size = new System.Drawing.Size(1017, 23);
            this.progressBar1.TabIndex = 6;
            // 
            // chart1
            // 
            this.chart1.BackColor = System.Drawing.Color.Transparent;
            chartArea1.Name = "ChartArea1";
            this.chart1.ChartAreas.Add(chartArea1);
            this.chart1.Location = new System.Drawing.Point(368, 445);
            this.chart1.Name = "chart1";
            this.chart1.Palette = System.Windows.Forms.DataVisualization.Charting.ChartColorPalette.Berry;
            series1.ChartArea = "ChartArea1";
            series1.ChartType = System.Windows.Forms.DataVisualization.Charting.SeriesChartType.SplineArea;
            series1.Name = "Series1";
            this.chart1.Series.Add(series1);
            this.chart1.Size = new System.Drawing.Size(560, 343);
            this.chart1.TabIndex = 7;
            this.chart1.Text = "chart1";
            this.chart1.Visible = false;
            // 
            // labelHist
            // 
            this.labelHist.AutoSize = true;
            this.labelHist.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelHist.Location = new System.Drawing.Point(371, 417);
            this.labelHist.Name = "labelHist";
            this.labelHist.Size = new System.Drawing.Size(117, 25);
            this.labelHist.TabIndex = 8;
            this.labelHist.Text = "Histograma:";
            this.labelHist.Visible = false;
            // 
            // trbMudarIntens
            // 
            this.trbMudarIntens.BackColor = System.Drawing.Color.White;
            this.trbMudarIntens.LargeChange = 1;
            this.trbMudarIntens.Location = new System.Drawing.Point(1413, 445);
            this.trbMudarIntens.Maximum = 255;
            this.trbMudarIntens.Name = "trbMudarIntens";
            this.trbMudarIntens.Orientation = System.Windows.Forms.Orientation.Vertical;
            this.trbMudarIntens.Size = new System.Drawing.Size(56, 331);
            this.trbMudarIntens.TabIndex = 9;
            this.trbMudarIntens.TickStyle = System.Windows.Forms.TickStyle.Both;
            this.trbMudarIntens.Scroll += new System.EventHandler(this.trackBar1_Scroll);
            // 
            // labelTrb
            // 
            this.labelTrb.AutoSize = true;
            this.labelTrb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelTrb.Location = new System.Drawing.Point(1373, 417);
            this.labelTrb.Name = "labelTrb";
            this.labelTrb.Size = new System.Drawing.Size(79, 25);
            this.labelTrb.TabIndex = 10;
            this.labelTrb.Text = "Delta: 0";
            // 
            // ckBxMudarInt
            // 
            this.ckBxMudarInt.AutoSize = true;
            this.ckBxMudarInt.Font = new System.Drawing.Font("Century Gothic", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ckBxMudarInt.Location = new System.Drawing.Point(1183, 751);
            this.ckBxMudarInt.Name = "ckBxMudarInt";
            this.ckBxMudarInt.Size = new System.Drawing.Size(214, 25);
            this.ckBxMudarInt.TabIndex = 11;
            this.ckBxMudarInt.Text = "Intensidade negativa";
            this.ckBxMudarInt.UseVisualStyleBackColor = true;
            // 
            // btnFMedia
            // 
            this.btnFMedia.FlatAppearance.BorderSize = 0;
            this.btnFMedia.FlatAppearance.MouseOverBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(125)))), ((int)(((byte)(44)))), ((int)(((byte)(199)))));
            this.btnFMedia.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnFMedia.Font = new System.Drawing.Font("Century Gothic", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFMedia.ForeColor = System.Drawing.SystemColors.Control;
            this.btnFMedia.Image = ((System.Drawing.Image)(resources.GetObject("btnFMedia.Image")));
            this.btnFMedia.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnFMedia.Location = new System.Drawing.Point(-1, 539);
            this.btnFMedia.Margin = new System.Windows.Forms.Padding(0);
            this.btnFMedia.Name = "btnFMedia";
            this.btnFMedia.Padding = new System.Windows.Forms.Padding(15, 0, 0, 0);
            this.btnFMedia.Size = new System.Drawing.Size(360, 60);
            this.btnFMedia.TabIndex = 10;
            this.btnFMedia.Text = "   Filtro da média (PA)";
            this.btnFMedia.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.btnFMedia.UseVisualStyleBackColor = true;
            this.btnFMedia.Click += new System.EventHandler(this.btnFMedia_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(1481, 817);
            this.Controls.Add(this.ckBxMudarInt);
            this.Controls.Add(this.labelTrb);
            this.Controls.Add(this.trbMudarIntens);
            this.Controls.Add(this.labelHist);
            this.Controls.Add(this.chart1);
            this.Controls.Add(this.progressBar1);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.labelImgOriginal);
            this.Controls.Add(this.pictureBox2);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.panel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Processador De Imagens";
            this.panel1.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.chart1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.trbMudarIntens)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.PictureBox pictureBox2;
        private System.Windows.Forms.OpenFileDialog openFileDialog1;
        private System.Windows.Forms.Label labelImgOriginal;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.ProgressBar progressBar1;
        private System.Windows.Forms.Button btnEscalaDeCinza;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button btnInvHoriz;
        private System.Windows.Forms.Button btnInvVert;
        private System.Windows.Forms.Button btnHistograma;
        private System.Windows.Forms.DataVisualization.Charting.Chart chart1;
        private System.Windows.Forms.Label labelHist;
        private System.Windows.Forms.Button btnBinalizacao;
        private System.Windows.Forms.TrackBar trbMudarIntens;
        private System.Windows.Forms.Label labelTrb;
        private System.Windows.Forms.Button btnNegativo;
        private System.Windows.Forms.Button btnMudarIntensidade;
        private System.Windows.Forms.CheckBox ckBxMudarInt;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button btnFMedia;
    }
}

