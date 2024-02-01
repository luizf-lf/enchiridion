﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Processador_De_Imagens
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            openFileDialog1.ShowDialog();
            pictureBox1.ImageLocation = openFileDialog1.FileName;
        }

        private void btnEscalaDeCinza_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            Color c;
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            int gs = 0;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);
                    gs = Convert.ToInt32(c.R * 0.3 + c.G * 0.59 + c.B * 0.11);
                    imgResultante.SetPixel(x, y, Color.FromArgb(gs, gs, gs));
                    progressBar1.Value++;
                }
            }

            pictureBox2.Image = imgResultante;
            /*Salva a Imagem convertida*/
            /*imgResultante.Save("ImagemConvertida.jpg", ImageFormat.Jpeg);*/
        }

        private void btnInvHoriz_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            Color c;
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);
                    imgResultante.SetPixel(imgOriginal.Width - x - 1, y, c);
                    progressBar1.Value++;
                }
            }
            pictureBox2.Image = imgResultante;
        }

        private void btnInvVert_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            Color c;
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);
                    imgResultante.SetPixel(x, imgOriginal.Height - y - 1, c);
                    progressBar1.Value++;
                }
            }
            pictureBox2.Image = imgResultante;
        }

        private void btnHistograma_Click(object sender, EventArgs e)
        {
            foreach (var series in chart1.Series)
            {
                series.Points.Clear();
            }

            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            Color c;
            int[] hist = new int[imgOriginal.Height * imgOriginal.Width];
            int gs = 0;
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);
                    gs = Convert.ToInt32(c.R * 0.3 + c.G * 0.59 + c.B * 0.11);
                    imgResultante.SetPixel(x, y, Color.FromArgb(gs, gs, gs));
                    hist[y] = gs;
                    progressBar1.Value++;
                }
            }
            pictureBox2.Image = imgResultante;



            for (int i = 0; i < 256; i++)
            {
                chart1.Series["Series1"].Points.AddXY(i, hist[i]);
            }
            chart1.Show();
            labelHist.Show();
        }

        private void btnBinalizacao_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            Color c;
            int gs = 0;
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);
                    gs = Convert.ToInt32(c.R * 0.3 + c.G * 0.59 + c.B * 0.11);
                    if (gs < trbMudarIntens.Value)
                    {
                        gs = 0;
                    }
                    else
                    {
                        gs = 255;
                    }
                    progressBar1.Value++;
                    imgResultante.SetPixel(x, y, Color.FromArgb(gs, gs, gs));
                }
            }
            pictureBox2.Image = imgResultante;
        }

        private void trackBar1_Scroll(object sender, EventArgs e)
        {
            labelTrb.Text = "Delta: "+trbMudarIntens.Value.ToString();
        }

        private void btnNegativo_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            Color c;
            int cr = 0;
            int cg = 0;
            int cb = 0;
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);
                    cr = 255 - c.R;
                    cg = 255 - c.G;
                    cb = 255 - c.B;
                    progressBar1.Value++;
                    imgResultante.SetPixel(x, y, Color.FromArgb(cr, cg, cb));
                }
            }
            pictureBox2.Image = imgResultante;
        }

        private void btnMudarIntensidade_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);
            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;
            Color c;
            int cr = 0;
            int cg = 0;
            int cb = 0;
            for (int x = 0; x < imgOriginal.Width; x++)
            {
                for (int y = 0; y < imgOriginal.Height; y++)
                {
                    c = imgOriginal.GetPixel(x, y);

                    if (ckBxMudarInt.Checked == true)
                    {
                        cr = c.R - trbMudarIntens.Value;
                        if (cr < 0)
                        {
                            cr = 0;
                        }
                        cg = c.G - trbMudarIntens.Value;
                        if (cg < 0)
                        {
                            cg = 0;
                        }
                        cb = c.B - trbMudarIntens.Value;
                        if (cb < 0)
                        {
                            cb = 0;
                        }
                    }
                    else
                    {
                        cr = c.R + trbMudarIntens.Value;
                        if (cr > 255)
                        {
                            cr = 255;
                        }
                        cg = c.G + trbMudarIntens.Value;
                        if (cg > 255)
                        {
                            cg = 255;
                        }
                        cb = c.B + trbMudarIntens.Value;
                        if (cb > 255)
                        {
                            cb = 255;
                        }

                    }

                    imgResultante.SetPixel(x, y, Color.FromArgb(cr, cg, cb));
                    progressBar1.Value += 1;
                }
            }
            pictureBox2.Image = imgResultante;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            var formInfo = new FormInfo();
            formInfo.Show();
        }

        private void btnFMedia_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);

            int mediaR = 0;
            int mediaG = 0;
            int mediaB = 0;

            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;


            for (int x = 1; x < imgOriginal.Width - 1; x++)
            {
                for (int y = 1; y < imgOriginal.Height - 1; y++)
                {
                    mediaR += imgOriginal.GetPixel(x - 1, y - 1).R + imgOriginal.GetPixel(x - 1, y).R + imgOriginal.GetPixel(x - 1, y + 1).R;
                    mediaR += imgOriginal.GetPixel(x, y - 1).R + imgOriginal.GetPixel(x, y).R + imgOriginal.GetPixel(x, y + 1).R;
                    mediaR += imgOriginal.GetPixel(x + 1, y - 1).R + imgOriginal.GetPixel(x + 1, y).R + imgOriginal.GetPixel(x + 1, y + 1).R;
                    mediaR = (int)(mediaR / 9);
                    if (mediaR > 255)
                    {
                        mediaR = 255;
                    }

                    mediaG += imgOriginal.GetPixel(x - 1, y - 1).G + imgOriginal.GetPixel(x - 1, y).G + imgOriginal.GetPixel(x - 1, y + 1).G;
                    mediaG += imgOriginal.GetPixel(x, y - 1).G + imgOriginal.GetPixel(x, y).G + imgOriginal.GetPixel(x, y + 1).G;
                    mediaG += imgOriginal.GetPixel(x + 1, y - 1).G + imgOriginal.GetPixel(x + 1, y).G + imgOriginal.GetPixel(x + 1, y + 1).G;
                    mediaG = (int)(mediaG / 9);
                    if (mediaG > 255)
                    {
                        mediaG = 255;
                    }

                    mediaB += imgOriginal.GetPixel(x - 1, y - 1).G + imgOriginal.GetPixel(x - 1, y).G + imgOriginal.GetPixel(x - 1, y + 1).G;
                    mediaB += imgOriginal.GetPixel(x, y - 1).G + imgOriginal.GetPixel(x, y).G + imgOriginal.GetPixel(x, y + 1).G;
                    mediaB += imgOriginal.GetPixel(x + 1, y - 1).G + imgOriginal.GetPixel(x + 1, y).G + imgOriginal.GetPixel(x + 1, y + 1).G;
                    mediaB = (int)(mediaB / 9);
                    if (mediaB > 255)
                    {
                        mediaB = 255;
                    }

                    imgResultante.SetPixel(x, y, Color.FromArgb(mediaR, mediaG, mediaB));
                    progressBar1.Value += 1;
                }
            }
            pictureBox2.Image = imgResultante;
            progressBar1.Value = imgResultante.Height * imgResultante.Width;
        }

        private void btnMediana_Click(object sender, EventArgs e)
        {
            Bitmap imgOriginal = new Bitmap(pictureBox1.Image);
            Bitmap imgResultante = new Bitmap(imgOriginal.Width, imgOriginal.Height);

            int[] vmediaR = new int[9];
            int[] vmediaG = new int[9];
            int[] vmediaB = new int[9];
            
            int[] vetor = new int[9];

            Ordenacao ordenar = new Ordenacao();

            int mediaR = 0;
            int mediaG = 0;
            int mediaB = 0;

            progressBar1.Minimum = 0;
            progressBar1.Value = 0;
            progressBar1.Maximum = imgOriginal.Width * imgOriginal.Height;


            for (int x = 1; x < imgOriginal.Width - 1; x++)
            {
                for (int y = 1; y < imgOriginal.Height - 1; y++)
                {
                    vmediaR[0] = imgOriginal.GetPixel(x - 1, y - 1).R;
                    vmediaR[1] = imgOriginal.GetPixel(x - 1, y).R;
                    vmediaR[2] = imgOriginal.GetPixel(x - 1, y + 1).R;

                    vmediaR[3] = imgOriginal.GetPixel(x , y -1).R;
                    vmediaR[4] = imgOriginal.GetPixel(x,y).R;
                    vmediaR[5] = imgOriginal.GetPixel(x, y+1).R;

                    vmediaR[6] = imgOriginal.GetPixel(x + 1, y - 1).R;
                    vmediaR[7] = imgOriginal.GetPixel(x + 1, y).R;
                    vmediaR[8] = imgOriginal.GetPixel(x + 1, y + 1).R;

                    vetor = ordenar.BubbleSort(vmediaR);
                    mediaR = vmediaR[4];

                    vmediaG[0] = imgOriginal.GetPixel(x - 1, y - 1).R;
                    vmediaG[1] = imgOriginal.GetPixel(x - 1, y).R;
                    vmediaG[2] = imgOriginal.GetPixel(x - 1, y + 1).R;

                    vmediaG[3] = imgOriginal.GetPixel(x, y - 1).R;
                    vmediaG[4] = imgOriginal.GetPixel(x, y).R;
                    vmediaG[5] = imgOriginal.GetPixel(x, y + 1).R;

                    vmediaG[6] = imgOriginal.GetPixel(x + 1, y - 1).R;
                    vmediaG[7] = imgOriginal.GetPixel(x + 1, y).R;
                    vmediaG[8] = imgOriginal.GetPixel(x + 1, y + 1).R;

                    vetor = ordenar.BubbleSort(vmediaG);
                    mediaG = vmediaG[4];


                    vmediaB[0] = imgOriginal.GetPixel(x - 1, y - 1).R;
                    vmediaB[1] = imgOriginal.GetPixel(x - 1, y).R;
                    vmediaB[2] = imgOriginal.GetPixel(x - 1, y + 1).R;

                    vmediaB[3] = imgOriginal.GetPixel(x, y - 1).R;
                    vmediaB[4] = imgOriginal.GetPixel(x, y).R;
                    vmediaB[5] = imgOriginal.GetPixel(x, y + 1).R;

                    vmediaB[6] = imgOriginal.GetPixel(x + 1, y - 1).R;
                    vmediaB[7] = imgOriginal.GetPixel(x + 1, y).R;
                    vmediaB[8] = imgOriginal.GetPixel(x + 1, y + 1).R;

                    vetor = ordenar.BubbleSort(vmediaB);
                    mediaB = vmediaB[4];


                    imgResultante.SetPixel(x, y, Color.FromArgb(mediaR, mediaG, mediaB));

                    progressBar1.Value += 1;
                }
            }
            pictureBox2.Image = imgResultante;
            progressBar1.Value = imgResultante.Height * imgResultante.Width;
        }
    }

    internal class Ordenacao
    {
        public int[] BubbleSort(int[] vetor)
        {
            for (int x = 0; x < vetor.Length; x++)
            {
                for (int y = 0; y < vetor.Length - 1; y++)
                {
                    if (vetor[y] > vetor[y + 1])
                    {
                        int swap = vetor[y];
                        vetor[y] = vetor[y + 1];
                        vetor[y + 1] = swap;
                    }
                }

            }
            return vetor;
        }
    }
}
